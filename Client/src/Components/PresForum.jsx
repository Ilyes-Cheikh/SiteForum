import Aos from 'aos';
import '../Assets/css/PresForum.css';
import forumimg from '../Assets/images/forumimg2.jpg'



export default function PresForum() {
  return (

    <div class="presForumContainer">

      <div class="img_container">
        <img class="imggg" src={forumimg} />
        <div class="t_text"> LE FORUM ANNUEL DE L'ENSI</div>
      </div>

      <div class="event_text">
        <div class="line"></div>
        Constituant un véritable vivier d’opportunités, ce forum a pu réunir plus d’une dizaine d’entreprises et startups de grandes renommées nationales et internationales leaders dans les différents domaines, spécialement celui de l’IT. Cette journée porte ouverte marque une occasion favorable pour un millier d'étudiants d’entrelacer des contacts avec des entreprises, déposer leurs CVs afin de bénéficier des stages et de s'informer sur les différents services qui leur sont proposés.

Fidèle à ses traditions, notre forum apporte de l'innovation à son thématique.
Cette dernière est discutée autour d'une table ronde où des conférenciers de haut calibres aident à promouvoir des techniques d'actualité, à mettre en évidence des concepts utiles et à échanger des idées sur des sujets innovants.</div>
      
      <div class="edition_text"> <span style={{ color: 'white' }}> Dans sa 16 </span> ème édition </div>
      
    </div>




  )
}