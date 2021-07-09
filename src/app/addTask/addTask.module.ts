import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskPage } from './addTask.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AddTaskPageRoutingModule } from './addTask-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AddTaskPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddTaskPage]
})
export class AddTaskPageModule {}
