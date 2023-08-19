import styles from './styles.module.css';
import about from 'assets/images/about.png';

const Main = () => {
  return (
    <section className={styles.main}>
      <div className="container">
        <h2>about datacentral paris</h2>
        <div className={styles.main__image}>
          <img src={about} alt="data-center" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          ultricies, risus ac tempus ullamcorper, sem leo malesuada dolor, ac
          venenatis orci felis at erat. Donec cursus orci non quam vehicula
          volutpat. Vivamus nec lobortis tellus. Donec imperdiet urna sit amet
          ullamcorper pellentesque. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur porta urna id vestibulum feugiat. Morbi in
          massa malesuada, iaculis ligula a, condimentum ligula. Morbi vel lorem
          arcu. Integer dignissim, ipsum at maximus tristique, orci lacus
          pretium lorem, a viverra odio metus sed turpis. Pellentesque leo mi,
          volutpat et ipsum et, posuere suscipit risus. Nam nunc erat, ornare
          sed nisi sed, volutpat ultricies urna. Morbi porttitor hendrerit
          ligula ac pretium. Cras ut libero non massa sagittis mattis vitae at
          velit. Cras sit amet elementum erat. Donec aliquet, nibh id suscipit
          maximus, magna purus pulvinar lorem, vitae varius urna arcu a lacus.
          Mauris volutpat leo id blandit consequat.
        </p>
        <p>
          Nam maximus sagittis quam eget aliquam. Sed nec augue maximus,
          malesuada leo sit amet, semper diam. Aenean iaculis non enim sed
          commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Mauris nec luctus lorem. Sed malesuada
          condimentum lorem, vel condimentum tellus porttitor nec. Cras libero
          erat, rutrum eget ante eu, lacinia posuere odio. Nullam risus felis,
          fringilla vitae odio nec, dictum aliquet quam. Integer facilisis
          aliquet lacus, sed venenatis justo vehicula in. Aliquam et libero
          felis. Vivamus ac congue leo. Nullam scelerisque cursus quam non
          aliquet. Vestibulum dignissim volutpat ex, in pulvinar nulla
          ullamcorper viverra. Donec porttitor ante quis leo vulputate, eu
          aliquam justo dapibus. Cras rhoncus sem vel auctor molestie. Aenean
          imperdiet dolor eu fringilla egestas.
        </p>
        <p>
          Proin lectus ligula, fermentum quis ipsum sed, porttitor viverra quam.
          Donec purus diam, placerat mattis quam ut, commodo rhoncus felis. Nam
          eget risus porta, sagittis quam at, posuere magna. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Phasellus massa
          nisl, condimentum vitae pulvinar commodo, auctor vel mi. Quisque
          malesuada ornare lacinia. Curabitur eu urna vitae nulla interdum
          efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Aenean sodales nisi eu arcu tristique,
          vel rutrum nisl hendrerit. Etiam pellentesque nulla eu efficitur
          tempus. Mauris vel lobortis augue. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>
          Nunc efficitur tempor tortor, et ornare elit aliquet rhoncus.
          Vestibulum ullamcorper pellentesque tortor pulvinar fringilla. Vivamus
          id massa vitae justo tempus congue. Pellentesque ac purus eu sapien
          ultrices aliquam vitae vel magna. Aliquam dictum velit quis sodales
          convallis. Praesent ac elementum lectus, eu consequat libero. Nam
          suscipit velit lacus, in faucibus ligula pretium pulvinar. Duis auctor
          aliquet nibh ac sollicitudin. Morbi eu tellus non metus faucibus porta
          et et felis. Mauris fringilla, turpis a dapibus laoreet, sem tellus
          bibendum ex, sed pellentesque ex leo non ante.
        </p>
      </div>
    </section>
  );
};
export default Main;
