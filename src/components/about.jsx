import "./about.css";

const About = () => {
  const exercise = () => {
    console.log("TEST TEST TEST");

    const ages = [13, 45, 74, 12, 78, 23, 56, 33, 72, 62, 46, 18, 3, 93, 10];
    var result = 0;
    //find and console log the sum of all ages
    for (var i = 0; i < ages.length; i++) {
      result += ages[i];
    }

    var max = ages[0];
    for (var i = 0; i < ages.length; i++) {
      if (ages[i] > max) {
        max = ages[i];
      }
    }

    console.log(max);

    console.log(result);
  };

  return (
    <div className="about-page">
      <h1>My Online Store</h1>
      <h5>Created by: Guillermo Jiménez</h5>

      <button onClick={exercise}>Do the magic!</button>
    </div>
  );
};

export default About;
