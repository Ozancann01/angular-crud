import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TestApiComponent } from './components/test-api/test-api.component';
import { PagesApiComponent } from './components/pages-api/pages-api.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  { path:'',redirectTo:'tutorials',pathMatch:'full' },
  { path:'tutorials',component:TutorialsListComponent },
  { path:'tutorials/:id',component:TutorialDetailsComponent },
  { path:'add',component:AddTutorialComponent  },
  { path:'add-page',component: PagesApiComponent  },
 { path:'edit-page/:id',component: EditPageComponent  },
  { path:'page-list',component:TestApiComponent  },

  { path:'home',component: HomeComponent},
  { path:'login',component: LoginComponent},
  { path:'register',component: RegisterComponent},
  { path:'profile',component: ProfileComponent},
  { path:'user',component: BoardUserComponent},
  { path:'mod',component: BoardModeratorComponent},
  { path:'admin',component: BoardAdminComponent},
  { path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
