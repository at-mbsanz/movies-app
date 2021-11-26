(self.webpackChunkmovies_app=self.webpackChunkmovies_app||[]).push([[6718],{6718:(o,i,e)=>{"use strict";e.r(i),e.d(i,{NewMoviePageModule:()=>d});var t=e(8583),n=e(665),r=e(3083),u=e(649),s=e(639),l=e(9991);function a(o,i){1&o&&(s.TgZ(0,"div",13),s._UZ(1,"ion-spinner"),s.qZA())}const m=[{path:"",component:(()=>{class o{constructor(o,i,e){this.formBuilder=o,this.moviesService=i,this.router=e,this.loading=!1}ngOnInit(){this.movieForm=this.formBuilder.group({title:["",[n.kI.required,n.kI.minLength(3)]],poster:["",[n.kI.required,n.kI.minLength(3)]],company:[""],year:["",[n.kI.required,n.kI.min(1900),n.kI.max(3001)]],duration:["",[n.kI.required]]})}submitMovieForm(){this.loading=!0,this.moviesService.addMovie(this.movieForm.value).subscribe(()=>{this.loading=!1,this.router.navigateByUrl("/movies")},o=>{this.loading=!1,console.log("Ha ocurrido un error a\xf1adiendo la pel\xedcula")})}resetForm(){this.movieForm.reset()}}return o.\u0275fac=function(i){return new(i||o)(s.Y36(n.qu),s.Y36(l.I),s.Y36(u.F0))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-new-movie"]],decls:40,vars:3,consts:[["slot","start"],["defaultHref","/movies"],[1,"ion-padding"],[3,"formGroup","submit"],["position","stacked"],["formControlName","title","type","text","placeholder","T\xedtulo"],["formControlName","poster","type","url","placeholder","P\xf3ster (url)"],["formControlName","company","placeholder","Selecciona un estudio"],["value","Estudio 1"],["value","Estudio 2"],["value","Estudio 3"],["formControlName","year","type","number","placeholder","A\xf1o"],["formControlName","duration","type","number","placeholder","Duraci\xf3n"],[1,"ion-margin","ion-text-right"],["color","light","type","button",3,"click"],["color","primary","type","submit",3,"disabled"],["class","ion-margin ion-text-right",4,"ngIf"]],template:function(o,i){1&o&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",0),s._UZ(3,"ion-back-button",1),s.qZA(),s.TgZ(4,"ion-title"),s._uU(5,"Nueva pel\xedcula"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(6,"ion-content",2),s.TgZ(7,"form",3),s.NdJ("submit",function(){return i.submitMovieForm()}),s.TgZ(8,"ion-item"),s.TgZ(9,"ion-label",4),s._uU(10,"T\xedtulo"),s.qZA(),s._UZ(11,"ion-input",5),s.qZA(),s.TgZ(12,"ion-item"),s.TgZ(13,"ion-label",4),s._uU(14,"P\xf3ster (url)"),s.qZA(),s._UZ(15,"ion-input",6),s.qZA(),s.TgZ(16,"ion-item"),s.TgZ(17,"ion-label"),s._uU(18,"Estudios"),s.qZA(),s.TgZ(19,"ion-select",7),s.TgZ(20,"ion-select-option",8),s._uU(21,"Estudio 1"),s.qZA(),s.TgZ(22,"ion-select-option",9),s._uU(23,"Estudio 2"),s.qZA(),s.TgZ(24,"ion-select-option",10),s._uU(25,"Estudio 3"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(26,"ion-item"),s.TgZ(27,"ion-label",4),s._uU(28,"A\xf1o"),s.qZA(),s._UZ(29,"ion-input",11),s.qZA(),s.TgZ(30,"ion-item"),s.TgZ(31,"ion-label",4),s._uU(32,"Duraci\xf3n"),s.qZA(),s._UZ(33,"ion-input",12),s.qZA(),s.TgZ(34,"div",13),s.TgZ(35,"ion-button",14),s.NdJ("click",function(){return i.resetForm()}),s._uU(36," Reiniciar "),s.qZA(),s.TgZ(37,"ion-button",15),s._uU(38," Guardar formulario "),s.qZA(),s.qZA(),s.YNc(39,a,2,0,"div",16),s.qZA(),s.qZA()),2&o&&(s.xp6(7),s.Q6J("formGroup",i.movieForm),s.xp6(30),s.Q6J("disabled",i.movieForm.invalid||i.loading),s.xp6(2),s.Q6J("ngIf",i.loading))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,n._Y,n.JL,n.sg,r.Ie,r.Q$,r.pK,r.j9,n.JJ,n.u,r.t9,r.QI,r.n0,r.as,r.YG,t.O5,r.PQ],styles:[""]}),o})()}];let c=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[u.Bz.forChild(m)],u.Bz]}),o})(),d=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[t.ez,n.u5,n.UX,r.Pc,c]]}),o})()}}]);