import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskerPage } from './tasker';

@NgModule({
  declarations: [
    TaskerPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskerPage),
  ],
})
export class TaskerPageModule {}
