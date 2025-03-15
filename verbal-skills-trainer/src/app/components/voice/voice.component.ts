import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-voice',
  standalone: true,
  imports: [CommonModule, 
    MatCardModule,
    MatButtonModule
  ],  // Add this to use directives like *ngIf
  templateUrl: './voice.component.html',
  styleUrl: './voice.component.scss'
})
export class VoiceComponent {
  transcript: string = '';

  startListening() {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert('Your browser does not support speech recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event: any) => {
      this.transcript = event.results[0][0].transcript;
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      alert('Error with speech recognition: ' + event.error);
    };
  }
}
