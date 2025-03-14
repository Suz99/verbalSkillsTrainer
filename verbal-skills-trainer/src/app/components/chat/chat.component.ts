import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,  // Ensuring this is a standalone component
  imports: [CommonModule, FormsModule],  // Import CommonModule and FormsModule
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  userMessage: string = '';
  chatHistory: { role: string, content: string }[] = [];

  constructor(private openAiService: OpenaiService) {}

  sendMessage() {
    if (this.userMessage.trim()) {
      this.chatHistory.push({ role: 'user', content: this.userMessage });

      this.openAiService.getChatResponse(this.userMessage).subscribe(response => {
        const reply = response.choices[0].message.content;
        this.chatHistory.push({ role: 'ai', content: reply });
      });

      this.userMessage = '';
    }
  }

}
