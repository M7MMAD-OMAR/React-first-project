import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import Card from "./Card";

const Main = () => {
    const values = [
        {
            title: 'First Title',
            img: img1,
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio illo, minus reiciendis repellat rerum"
        },
        {
            title: 'Second Title',
            img: img2,
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio illo, minus reiciendis repellat rerum"
        },
        {
            title: 'Third Title',
            img: img3,
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio illo, minus reiciendis repellat rerum"
        },
    ]
    return (
      <div>
          {/* all cards start */}
          <div className="flex flex-row  my-6 flex-wrap">
              {
                  values.length ?
                      (
                          values.map((item, index) => {
                              return <Card title={item.title} img={item.img} body={item.body}/>;
                          })
                      ) :
                      (
                          <h1>Don't have any data</h1>
                      )
              }
          </div>
          {/* all cards end */}

      </div>
    );
}

export default Main;