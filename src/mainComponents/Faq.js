import React from "react";

class Faq extends React.Component {
  toggleAccordion = (e) => {
    const items = document.getElementById(`${e.target.id}`);
    items.classList.toggle("active");
    items.nextElementSibling.classList.toggle("active");
  };

  render() {
    return (
      <div className="faq-cover">
        <div className="faq-container">
          <h1>F.A.Qs</h1>
          <div className="accordion">
            <div className="accordion-item">
              <span onClick={this.toggleAccordion} id="1">
                What is COVID-19?
              </span>
              <div className="content">
                <p>
                  Coronaviruses are zoonotic, meaning they are normally
                  transmitted between animals and people. The coronavirus
                  disease (COVID-19) is caused by a new strain of coronavirus
                  (SARS-CoV-2) that has not been previously identified in
                  humans. It was first reported to WHO on the 31st of December,
                  2019 in Wuhan, China.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <span onClick={this.toggleAccordion} id="2">
                What is the source of COVID-19?
              </span>
              <div className="content">
                <p>
                  Scientists and public health officials are working hard to
                  identify the source of the SARS-CoV-2 which is the virus that
                  causes COVID-19. The initial transmission appeared to be from
                  an animal source, but there has been person-to-person
                  transmission in countries.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <span onClick={this.toggleAccordion} id="3">
                Is COVID-19 airborne?
              </span>
              <div className="content">
                <p>
                  When a person with coronavirus coughs or exhales, droplets
                  land on objects and surfaces around the person. Other people
                  then catch the virus by touching these objects or surfaces,
                  then touching their eyes, nose or mouth. People can also catch
                  coronavirus if they breathe in these droplets. This is why it
                  is important to stay at least 2 metres away from a person who
                  is coughing or sneezing.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <span onClick={this.toggleAccordion} id="4">
                What is Nigeria doing to control the spread of the disease in
                the country?
              </span>
              <div className="content">
                <p>
                  The Federal Government of Nigeria has initiated a Presidential
                  Task Force on COVID-19 to provide high-level strategic
                  national response to the disease in Nigeria. The Federal
                  Ministry of Health has activated an NCDC-led national COVID-19
                  Emergency Operations Centre (EOC) to coordinate the national
                  public health response. At State-level, preparedness and
                  response activities are being coordinated through Public
                  Health EOCs in each State. The NCDC has also launched a
                  campaign themed #TakeResponsibility. This is a call to all
                  Nigerians and residents in the country to join forces and to
                  be proactive in taking greater individual and collective
                  responsibility in preventing and controlling the spread of
                  COVID-19 in Nigeria.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <span onClick={this.toggleAccordion} id="5">
                What are the symptoms of COVID-19?
              </span>
              <div className="content">
                <p>
                  <ol>
                    <li>Cough</li>
                    <li>Fever</li>
                    <li>Breathing difficulties</li>
                  </ol>
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <span onClick={this.toggleAccordion} id="6">
                Should I travel to another state where there is no case of
                COVID-19 to stay safe?
              </span>
              <div className="content">
                <p>
                  No. There is a higher risk of spreading COVID-19 through
                  movement and inter-state travel. The Federal Government has
                  also prohibited all interstate travel except for essential
                  travels and services, such as: agro-products, petroleum
                  products, relief items and persons on essential duty.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <span onClick={this.toggleAccordion} id="7">
                How do I get tested for COVID-19?
              </span>
              <div className="content">
                <p>
                  In line with the national case definition, the following
                  people can be tested for COVID-19 in Nigeria; Anyone with
                  travel history outside Nigeria, who presents with fever, cough
                  or breathing difficulties within 14 days of arrival; OR Anyone
                  who has symptoms and is a contact of a confirmed or probable
                  case; OR Anyone with either cough, difficulty breathing or
                  shortness of breath in an area of moderate or high COVID-19
                  prevalence with no other explanation for the symptoms For
                  people in either of these categories, you must self-isolate
                  and call your state hotline or the NCDC toll-free line
                  immediately on 080097000010. The State Ministry of Health
                  supported by NCDC will arrange for sample collection and
                  transportation to the laboratory.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <span onClick={this.toggleAccordion} id="8">
                Is there a cure for COVID-19?
              </span>
              <div className="content">
                <p>
                  There is no specific cure yet for COVID-19. However, many of
                  the symptoms can be treated. Treatment is based on the
                  patient’s clinical condition but supportive care for infected
                  persons can be highly effective.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <span onClick={this.toggleAccordion} id="9">
                Should I wear a mask?
              </span>
              <div className="content">
                <p>
                  The Federal Government of Nigeria has mandated the use of
                  non-medical face mask/covering for all persons while in public
                  spaces. NCDC has published guidelines on the use of face cloth
                  masks for members of the public. This provides guidance on the
                  effective use of masks by individuals in non-healthcare
                  settings.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <span onClick={this.toggleAccordion} id="10">
                Is there anything a person can do to avoid becoming infected?
              </span>
              <div className="content">
                <p>
                  To reduce the risk of infection or spread of COVID-19, members
                  of the public are advised to adhere to the following hand and
                  respiratory hygiene measures:
                  <ol>
                    <li>
                      Wash your hands regularly with soap and water or use an
                      alcohol-based sanitiser if no water and soap is available
                    </li>
                    <li>Use of no-touch greetings</li>
                    <li>
                      Maintain at least 2 metres (5 feet) physical distance
                      between yourself and anyone who is coughing or sneezing
                    </li>
                    <li>
                      Stay home if you feel unwell with symptoms like fever,
                      cough and difficulty in breathing. Immediately call your
                      state helpline or call NCDC’s 24/7 toll-free number. Do
                      not self-medicate
                    </li>
                    <li>
                      Persons with a persistent cough or sneezing, should also
                      stay at home until they recover
                    </li>
                    <li>
                      Obey national and state directives requesting the
                      cancellation and avoidance of large gatherings, including
                      places of worship, social and sporting events Avoid
                      crowded spaces such as open markets, crowded supermarkets
                      and pharmacies
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Faq;
