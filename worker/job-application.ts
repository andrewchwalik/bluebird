type Env = {
  DISCORD_WEBHOOK_URL: string
  ALLOWED_ORIGINS?: string
}

type JobApplication = {
  fullName?: string
  phone?: string
  email?: string
  address?: string
  dateOfBirth?: string
  availability?: string
  whyBluebird?: string
  experience?: string
  paceRating?: string
}

const defaultAllowedOrigins = ['https://bluebird.ooo', 'https://www.bluebird.ooo']

const getAllowedOrigins = (env: Env) =>
  env.ALLOWED_ORIGINS
    ? env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
    : defaultAllowedOrigins

const getCorsHeaders = (request: Request, env: Env) => {
  const origin = request.headers.get('Origin') ?? ''
  const allowedOrigins = getAllowedOrigins(env)
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0]

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  }
}

const jsonResponse = (request: Request, env: Env, body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...getCorsHeaders(request, env),
      'Content-Type': 'application/json',
    },
  })

const requiredFields: Array<keyof JobApplication> = [
  'fullName',
  'phone',
  'email',
  'address',
  'dateOfBirth',
  'availability',
  'whyBluebird',
  'experience',
  'paceRating',
]

const formatField = (label: string, value?: string) => ({
  name: label,
  value: value?.trim() || 'Not provided',
})

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: getCorsHeaders(request, env),
      })
    }

    if (request.method !== 'POST') {
      return jsonResponse(request, env, { error: 'Method not allowed' }, 405)
    }

    if (!env.DISCORD_WEBHOOK_URL) {
      return jsonResponse(request, env, { error: 'Application endpoint is not configured' }, 500)
    }

    let application: JobApplication

    try {
      application = await request.json()
    } catch {
      return jsonResponse(request, env, { error: 'Invalid application payload' }, 400)
    }

    const missingFields = requiredFields.filter((field) => !application[field]?.trim())

    if (missingFields.length > 0) {
      return jsonResponse(
        request,
        env,
        { error: 'Missing required fields', fields: missingFields },
        400,
      )
    }

    const discordResponse = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Bluebird Jobs',
        embeds: [
          {
            title: 'New Bluebird Job Application',
            color: 0x5eb4d3,
            fields: [
              formatField('Full Name', application.fullName),
              formatField('Phone Number', application.phone),
              formatField('Email', application.email),
              formatField('Address', application.address),
              formatField('Date of Birth', application.dateOfBirth),
              formatField('Summer Availability', application.availability),
              formatField('Why Bluebird?', application.whyBluebird),
              formatField('Relevant Experience', application.experience),
              formatField('Fast-Paced Food Service Rating', application.paceRating),
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    })

    if (!discordResponse.ok) {
      return jsonResponse(request, env, { error: 'Unable to submit application' }, 502)
    }

    return jsonResponse(request, env, { ok: true })
  },
}
