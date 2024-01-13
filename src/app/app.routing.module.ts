import { HomeComponent } from "./home/home.component";
import { ShopComponent } from "./shop/shop.component";
import { PagesComponent } from "./pages/pages.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { JoinNowComponent } from "./join-now/join-now.component";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RouterModule,Router } from "@angular/router";

const routes :Routes=[
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}