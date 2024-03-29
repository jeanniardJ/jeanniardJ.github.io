import Navigator from './Navigator';

export default function Header() {
  return (
    <header className='text-white'>
      <Navigator />
      <section className='container mx-auto mt-20 px-12'>
        <div className="pt-5 flex justify-between flex-wrap">
          <div className="pt-5 flex justify-between items-center w-100">
            <div className='w-25 h-25'><img src="./images/jj_logo_blanc.png" alt="" /></div>
            <div>
              <h2>Jonathan</h2>
              <p>Ingénieur d’applications informatiques</p>
            </div>
          </div>
          <div className='mt-5'>
            <h1 className='text-2xl font-bold'>En alternance Informatique et Système d'information</h1>
            <p className='mt-10'>Passionné par l'informatique et les systèmes d'information, je suis actuellement à la recherche d'une opportunité en alternance. Mon parcours et mes compétences reflètent mon engagement envers le domaine de l'IT. À la recherche d'un environnement propice au développement de mes compétences, je suis prêt à contribuer de manière significative tout en acquérant une expérience enrichissante. Mon objectif est de participer activement à des projets innovants et de mettre en pratique mes connaissances dans le cadre d'une alternance dynamique.</p>
          </div>
        </div>
      </section>
    </header>
  );
};
