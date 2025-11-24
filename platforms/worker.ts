import Elysia from 'elysia'
import { CloudflareAdapter } from 'elysia/adapter/cloudflare-worker'
import app from '../src'

export default new Elysia({ adapter: CloudflareAdapter })
    .use(app)
    .compile()