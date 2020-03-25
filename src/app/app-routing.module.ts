import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { InfoComponent } from 'src/app/info/info.component';
import { UpdatesComponent } from 'src/app/updates/updates.component';
import { ConnectComponent } from 'src/app/connect/connect.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'connect', component: ConnectComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
