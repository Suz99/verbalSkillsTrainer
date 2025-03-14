import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add FormsModule if using ngModel
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss'
})
export class AssessmentComponent {

  presentationText: string = '';
  feedback: string = '';

  constructor(private openAiService: OpenaiService) {}

  assessPresentation() {
    const prompt = `Analyze this presentation for structure, clarity, and persuasiveness: "${this.presentationText}"`;
    this.openAiService.getChatResponse(prompt).subscribe(response => {
      this.feedback = response.choices[0].message.content;
    });
  }
}
