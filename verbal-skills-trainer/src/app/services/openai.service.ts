import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, delay, mergeMap } from 'rxjs/operators';

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

    console.log("OpenAI API URL:", this.apiUrl);
    const body = {
      model: "gpt-4o-mini-2024-07-18",
      messages: [{ role: "user", content: prompt }]
    };
    
    return this.http.post(this.apiUrl, body, { headers: this.headers }).pipe(
      retry({
        count: 3,
        delay: (error, retryCount) => {
          console.log(`Retry attempt ${retryCount}: retrying in 3 seconds...`);
          return throwError(error).pipe(delay(3000));
        }
      })
    );
  }
}
