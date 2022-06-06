import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
   const resultPosts=[];
   for(const post of value){
    if(post.nombre.indexOf(args)> -1){
      resultPosts.push(post);
    }
    
   }
   return resultPosts;
  }



}
