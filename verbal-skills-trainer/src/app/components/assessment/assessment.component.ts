import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],  // Add FormsModule if using ngModel
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss'
})
export class AssessmentComponent {

  presentationText: string = '';
  feedback: string = '';

  constructor(private openAiService: OpenaiService) {}

  assessPresentation() {
    const prompt = `Analyze this presentation for structure, clarity, and persuasiveness: "${this.presentationText}"`;
    console.log(Response);
    this.openAiService.getChatResponse(prompt).subscribe(response => {
      console.log("hello", response);
      this.feedback = response.choices[0].message.content;
    });
  }
}
