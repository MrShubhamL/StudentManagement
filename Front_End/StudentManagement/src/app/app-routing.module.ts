import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminDashboardComponent } from './pages/ADMIN/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './pages/ADMIN/admin-home/admin-home.component';
import { EmailVerificationComponent } from './pages/USER/email-verification/email-verification.component';
import { ProjectStatusComponent } from './pages/USER/project-status/project-status.component';
import { USERDASHBOARDComponent } from './pages/USER/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './pages/USER/user-home/user-home.component';
import { UserProfileComponent } from './pages/USER/user-profile/user-profile.component';
import { UserProjectComponent } from './pages/USER/user-project/user-project.component';
import { UserSkiilsComponent } from './pages/USER/user-skiils/user-skiils.component';
import { AdminGuard } from './services/admin.guard';
import { StudentGuard } from './services/student.guard';


const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"sign-up",
    component: RegistrationComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path: "admin-dashboard",
    component: AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'home',
        component: AdminHomeComponent,
      }
    ]

  },
  {
    // User guard.....
    path: "user-dashboard",
    component: USERDASHBOARDComponent,
    canActivate:[StudentGuard],
    children:[
      {
        path: 'home',
        component: UserHomeComponent,
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'skills',
        component: UserSkiilsComponent,
      },
      {
        path: 'project',
        component: UserProjectComponent,
      },
      {
        path: 'project-status',
        component: ProjectStatusComponent,
      }
    ]
  },
  {
    path: 'email-verification',
    component: EmailVerificationComponent,
    canActivate:[StudentGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
