import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${environment.openaiApiKey}`
  });

  constructor(private http: HttpClient) { }

  getChatResponse(prompt: string): Observable<any> {
    const body = {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    };
    return this.http.post(this.apiUrl, body, { headers: this.headers });
  }
}
