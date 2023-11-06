import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login/login.component';
import { RegisterMerchantComponent } from './components/register-merchant/register-merchant.component';
import { DashboardUserIndexComponent } from './pages/dashboard-user-index/dashboard-user-index.component';
import { HomeMainComponent } from './components/home-main/home-main.component';

const routes: Routes = [
 { path: '', component: HomeMainComponent },
 { path: 'login', component: LoginPageComponent },
 { path: 'register-merchant', component: RegisterMerchantComponent },
 { path: 'user/dashboard', component: DashboardUserIndexComponent },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
