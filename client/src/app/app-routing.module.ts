import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ChatpageGuardGuard } from './chatpage-guard.guard';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
{ path: 'chat-socket', loadChildren: () => import('./pages/chat-socket/chat-socket.module').then(m => m.ChatSocketModule) },
{ path: 'chat-page', component: ChatPageComponent, canActivate:[ChatpageGuardGuard], loadChildren: () => import('./pages/chat-page/chat-page.module').then(m => m.ChatPageModule) },
{ path: 'chat-test', loadChildren: () => import('./pages/chat-test/chat-test.module').then(m => m.ChatTestModule) },
{ path: 'chat-signup', loadChildren: () => import('./pages/chat-signup/chat-signup.module').then(m => m.ChatSignupModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
