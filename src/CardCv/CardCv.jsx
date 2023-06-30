import React from "react";
import "./styles.css";


const CardCv = () => {
  return (
    <div className="container-fluid jumbotron">
      <div class="container-fluid cv-page">
        <div class="row">
          <div class="col-4">
            <section class="section__left">
              <article class="avatar">
                <div class="frame"></div>
                <div class="image"></div>
              </article>
              <article class="info">
                <p class="role role-style">Agustin Diaz</p>
                <p class="role role-style">Front-End Developer</p>
              </article>
              <article class="skills">
                <h2 class="title">Skills</h2>
                <div class="content-info">
                  <ul class="list-item">
                    <li class="item">HTML(5)</li>
                    <li class="item">CSS(3)</li>
                    <li class="item">JavaScript/Jquery</li>
                    <li class="item">VueJS</li>
                    <li class="item">NativeScript</li>
                    <li class="item">Vuex</li>
                    <li class="item">NuxtJS</li>
                    <li class="item">Sass/LESS</li>
                    <li class="item">Handlebar</li>
                    <li class="item">Gulp</li>
                    <li class="item">RESTful API</li>
                    <li class="item">Firebase</li>
                    <li class="item">UI/UX</li>
                  </ul>
                </div>
              </article>
              <article class="skills">
                <h2 class="title">Other Skills</h2>
                <div class="content-info">
                  <ul class="list-item">
                    <li class="item">Time Management</li>
                    <li class="item">Communication</li>
                    <li class="item">Self Study</li>
                    <li class="item">Teamwork</li>
                  </ul>
                </div>
              </article>
              <article class="additional-info">
                <h2 class="title">Languages</h2>
                <div class="content-info">
                  <ul>
                    <li>- English</li>
                  </ul>
                </div>
              </article>
            </section>
          </div>
          <div class="col-8">
            <section class="section__right">
              <article class="objective">
                <h2 class="title title-cv">Objective</h2>
                <p class="content-info">
                  I’m a Front End Developer with 5 years experience building and
                  maintaining responsive websites and applications. I specialize
                  in HTML(5), CSS(3), JavaScript, jQuery, Bootstrap, Sass/Less,
                  Vuejs. I have good attitude, hard-working and non-stop effort.
                  I can fast integrate and complete tasks on schedule. I want to
                  work in a professional environment, respectful and improve my
                  skills, experiences.
                </p>
              </article>

              <article class="technical">
                <h2 class="title title-cv">TECHNICAL</h2>
                <div class="content-info">
                  <h4 class="subtitle">Development</h4>
                  <ul class="list-tech">
                    <li>HTML(5), CSS(3)</li>
                    <li>
                      JavaScript (ES6),JQuery, VueJS, Vuex, Nuxtjs, NativeScript
                      Vue, React Native,
                    </li>
                    <li>
                      <b>CSS Frameworks:</b> Bootstrap, Material UI, Tailwind
                      CSS...
                    </li>
                    <li>Platform: Netlify</li>
                    <li>
                      <b>UI library:</b> Element UI, Kendo UI, Telerik
                    </li>
                    <li>
                      <b>Preprocessors:</b> SASS, LESS
                    </li>
                    <li>
                      <b>Templating Engines:</b> Handlebar
                    </li>
                    <li>
                      <b>Database:</b> SQL, Firebase
                    </li>
                    <li>
                      <b>Web service:</b> RESTful API.
                    </li>
                    <li>Responsive Design</li>
                    <li>Cross Browser Development</li>
                    <li>Good knowledge of UI/UX design</li>
                  </ul>

                  <h4 class="subtitle">Tools</h4>
                  <ul class="list-tech">
                    <li>
                      <b>Code editor:</b> Visual Studio Code, Sublime Text,
                      Atom, Visual Studio
                    </li>
                    <li>
                      <b>Version control system:</b> Git, Gitlab, Bitbucket,
                      Source Tree, SVN, TFS
                    </li>
                    <li>
                      <b>Other:</b> Sketch
                    </li>
                  </ul>
                </div>
              </article>

              <article class="experience">
                <h2 class="title title-cv">Experience</h2>
                <div class="content-info">
                  <div class="experience__item">
                    <h3 class="experience__role">
                      <span class="experience__time">Jul 2020 - Current</span>
                    </h3>
                    <span class="experience__company">Bigin Company</span>
                    <ul class="experience__responsibilities">
                      <li>
                        Working with the project mobiles: NativeScript, React
                        Native
                      </li>
                      <li>
                        Implement mobile design systems by NativeScript + VueJS
                      </li>
                      <li>Support other projects</li>
                    </ul>
                  </div>
                  <div class="experience__item">
                    <h3 class="experience__role">
                      <span class="experience__time">Oct 2019 - Jun 2020</span>
                    </h3>
                    <span class="experience__company">FPT Software</span>
                    <ul class="experience__responsibilities">
                      <li>
                        Working in the project Senmonten(Shiseido cosmetic).
                        Store management system
                      </li>
                      <li>
                        Implement core FE by Vuejs/HTML/CSS/JS. Implement
                        functions business.
                      </li>
                      <li>
                        Support and provide solutions, detect issues about FE
                      </li>
                      <li>Training for trainees about technical and process</li>
                    </ul>
                  </div>
                  <div class="experience__item">
                    <h3 class="experience__role">
                      Front-End Developer
                      <span class="experience__time">Sep 2015 - Mar 2019</span>
                    </h3>
                    <span class="experience__company">Aperia Solution</span>
                    <ul class="experience__responsibilities">
                      <li>
                        Responsible for implementing UI based on pixel perfect
                        design.
                      </li>
                      <li>
                        Building Design Language System using VueJS, HTML, CSS,
                        Javascript, Jquery. Customize controls of KendoUI,
                        Telerik.
                      </li>
                      <li>
                        Recommending solutions for a streamlined, user-friendly
                        interface with the design team.
                      </li>
                      <li>Performing bug fixes and code reviews.</li>
                      <li>
                        Implement and making prototype new features and
                        interactions, then build, test and ship them in
                        products.
                      </li>
                      <li>
                        Supporting .NET developers to create new features,
                        functionality.
                      </li>
                    </ul>
                  </div>
                  <div class="experience__item">
                    <h3 class="experience__role">
                      Front-End Developer
                      <span class="experience__time">Jan 2015 - Aug 2015</span>
                    </h3>
                    <span class="experience__company">
                      Success Software Service
                    </span>
                    <ul class="experience__responsibilities">
                      <li>
                        Responsible for implementing UI based on mock up design.
                      </li>
                      <li>Making prototype new features and interactions.</li>
                      <li>
                        Supporting .NET developers to create new features,
                        functionality
                      </li>
                      <li>
                        Work together with designers, QAs to discuss and find
                        solutions.
                      </li>
                    </ul>
                  </div>
                </div>
                
              </article>
            </section>
          </div>
        </div>

      </div>
    </div>
  );

  
};

export default CardCv;
