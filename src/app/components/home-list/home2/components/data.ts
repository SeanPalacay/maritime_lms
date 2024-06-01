import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root',
})
export class HomeData {
    public Category = [
        {
            title:'Angular Development',
            instructors:'40',
            img:'1'
        },
        {
            title:'Python Development',
            instructors:'20',
            img:'2'
        },
        {
            title:'Node Js Development',
            instructors:'120',
            img:'3'
        },
        {
            title:'PHP Development',
            instructors:'40',
            img:'4'
        },
        {
            title:'Docker Development',
            instructors:'40',
            img:'5'
        },
        {
            title:'Swift Development',
            instructors:'40',
            img:'6'
        },
        {
            title:'Photography',
            instructors:'40',
            img:'7'
        },
        {
            title:'Business',
            instructors:'40',
            img:'8'
        },
       

    ]
    public Featured_Courses = [
        {
            title:'PHP',
            id:1,
            reviews:'203',
            course:'The Complete Web Developer PHP framework Course 2.0',
            author:'Russell T. Johnson',
        },
        {
            title:'Wordpress',
            id:2,
            reviews:'243',
            course:'Wordpress for Beginners - Master Wordpress Quickly',
            author:'Cristofer Nolen',
        },
        {
            title:'Angular',
            id:3,
            reviews:'243',
            course:'Learn Angular Fundamentals From beginning to advance lavel',
            author:'Cristofer Nolen',
   
        },
        {
            title:'HTML5',
            id:4,
            reviews:'243',
            course:'Build Responsive Real World Websites with HTML5 and CSS3',
            author:'Cristofer Nolen',

        },
        {
            title:'C#',
            id:5,
            reviews:'243',
            course:'C# Developers Double Your Coding Speed with Visual Studio',
            author:'Cristofer Nolen',
        },
        {
            title:'UI/UX',
            id:6,
            reviews:'234',
            course:'Information About UI/UX Design Degree',
            author:'Cristofer Nolen',
        },
    ]
    public trending_Courses = [
        {
            id:1,
            title:'Wordpress',
            reviews:'333',
            course:'Wordpress for Beginners - Master Wordpress Quickly',

        },
        {
            id:2,
            title:'C#',
            reviews:'235',
            course:'C# Developers Double Your Coding Speed with Visual Studio',

        },
        {
            id:3,
            title:'Angular',
            reviews:'674',
            course:'Learn Angular Fundamentals From beginning to advance lavel',

        },
        {
            id:4,
            title:'HTML5',
            reviews:'123',
            course:'Build Responsive Real World Websites with HTML5 and CSS3',

        },
    ]
    public feature_instructors =[
        {
            id:1,
            name:'Julian Adrose',
            title:'Angular Expert',
            students:'50'
        },
        {
            id:2,
            name:'Gallegos',
            title:'Docker',
            students:'70'
        },
        {
            id:3,
            name:'Kristi',
            title:'Node Js',
            students:'60'
        },
        {
            id:4,
            name:'Pinero',
            title:'Python',
            students:'80'
        },
    ]
    public real_reviews = [
        {
            title:'Helps us to improve our productivity',
            para:'High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.',
            name:'William George',
            role:'CEO & Chairman'
        },
        {
            title:'Helps us to improve our productivity',
            para:'High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.',
            name:'Gallegos',
            role:'CEO & MD'
        },
        {
            title:'Helps us to improve our productivity',
            para:'High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.',
            name:'Julian Adrose',
            role:'Manager'
        },
    ]
    public blog = [
        {
            id:1,
            badge:'Marketing',
            title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date:'Jun 15, 2022'
        },
        {
            id:2,
            badge:'Sales',
            title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date:'Jun 15, 2022'
        },
        {
            id:3,
            badge:'Marketing',
            title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date:'Jun 15, 2022'
        },
    ]
    
}