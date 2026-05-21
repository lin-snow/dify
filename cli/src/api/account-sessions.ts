import type { SessionListResponse } from '@dify/contracts/api/openapi/types.gen'
import type { HttpClient } from '../http/types.js'

export class AccountSessionsClient {
  private readonly http: HttpClient

  constructor(http: HttpClient) {
    this.http = http
  }

  async list(): Promise<SessionListResponse> {
    return this.http.get<SessionListResponse>('account/sessions')
  }

  async revoke(sessionId: string): Promise<void> {
    await this.http.delete(`account/sessions/${encodeURIComponent(sessionId)}`)
  }

  async revokeSelf(): Promise<void> {
    await this.http.delete('account/sessions/self')
  }
}
