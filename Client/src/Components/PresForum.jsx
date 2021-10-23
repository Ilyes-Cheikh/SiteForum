import '../Assets/css/PresForum.css';
import forumimg from '../Assets/images/forumimg2.jpg'


export default function PresForum(){
    return(
        <div class="presForumContainer">
           <div class="img_container">
              <img class="imggg" src={forumimg}/>
              <div class="t_text"> LE FORUM ANNUEL DE L'ENSI</div>           
           </div>  
           <div class="event_text">
             <div class="line"></div>  
             Les portes ouvertes sont l'événement phare et la fierté de l'ENSI. Aussi cette année, comme chaque année, la 16ème édition aura lieu à l'ENSI le 03 novembre 2021 qui porte a pour thématique «  The Fintech and regtech tandem » . Ce jour-là, l'ENSI ouvrira ses portes aux étudiants, aux enseignants et surtout aux entreprises les plus prestigieuses au niveau national et international dans le domaine de l'informatique. Ces entreprises, utilisant les stands mis à leur disposition, viennent à l'école pour se lier, rencontrer les différentes profiles et accepter les candidatures pour les IEP et les stages. Ainsi, au cours de cette journée notre école s'est transformée en espace ouvert de recrutement et interaction avec les dirigeants des plus grandes entreprises, mais JPO ne se limite pas à cela. Chaque année, en effet, une thématique est posée autour des tables rondes, des conférences et des ateliers qui se déroulent. Il aide à promouvoir des techniques d'actualité, à mettre en évidence des concepts utiles et à échanger des idées sur des sujets d'actualité.</div>
           <div class="edition_text"> <span style={{color:'white'}}> Dans sa 16 </span> ème édition </div> 
           </div>
  
    )
}