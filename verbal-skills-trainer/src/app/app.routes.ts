import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { VoiceComponent } from './components/voice/voice.component';
import { AssessmentComponent } from './components/assessment/assessment.component';

export const routes: Routes = [
    { path: '', redirectTo: 'chat', pathMatch: 'full' },
    { path: 'chat', component: ChatComponent },
    { path: 'voice', component: VoiceComponent },
    { path: 'assessment', component: AssessmentComponent }
];
