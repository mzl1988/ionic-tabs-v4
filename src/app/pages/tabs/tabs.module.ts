import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { MinePageModule } from '../mine/mine.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    MinePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
