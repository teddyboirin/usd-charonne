import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import ImageSide from '@/components/ImageSide';
import { ButtonBase } from '@mui/material';
import Link from 'next/link';

export default function Club() {
  return (
    <div>
      <BasicHead title="Le club" image="" />
      {/* <BasicHead image="https://placehold.co/800x300" /> */}
      <div className="w-full mb-6 flex items-center justify-center gap-3">
        <Link href="/galerie">
          <Button white>Photos du club</Button>
        </Link>
        <Link href="/teams">
          <Button white>Équipes</Button>
        </Link>
      </div>
      <ImageSide
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores rerum maxime laboriosam eum eligendi ab distinctio! Eveniet, blanditiis. Ducimus assumenda aspernatur ut earum cum repellat error possimus laboriosam aut a! Expedita amet cumque sit id explicabo asperiores hic molestiae facilis tenetur ratione quasi, adipisci soluta omnis porro, eos at. Voluptatem optio maiores nam earum labore, fugit excepturi sit at esse est molestiae eum, dignissimos officia illo ratione deleniti modi ab nemo eveniet minima quos alias! Voluptas obcaecati error cupiditate placeat, incidunt dolor, libero nam provident adipisci voluptatum, animi soluta illo voluptatem ratione aut reprehenderit optio. Odit minima unde quod quae doloribus perferendis quis vel nostrum iure minus laboriosam voluptatibus eveniet provident optio porro quam debitis fugiat, saepe fugit eligendi necessitatibus laborum repellat incidunt maiores! Facere, natus. Ullam quia suscipit exercitationem facere commodi illum fugit qui ipsam ab a. Expedita eligendi autem at praesentium non aspernatur, nostrum qui atque pariatur libero ut earum voluptatum assumenda placeat alias excepturi possimus quo magnam corrupti dignissimos! Voluptatibus quis libero accusamus eius doloribus qui similique delectus placeat debitis quos, possimus vitae aliquam eum mollitia blanditiis quasi accusantium nam hic repellat architecto quam voluptates! Facere explicabo molestias quae, aspernatur architecto iste, quod quaerat placeat molestiae dolores officiis laborum illum rem delectus debitis ipsam sint temporibus blanditiis expedita voluptate iusto ullam iure deleniti necessitatibus. Nesciunt ipsum dignissimos voluptates distinctio, ex amet delectus ad unde fugit sint harum veritatis corporis minus optio, dolorem at iure similique. Quibusdam eveniet consectetur eligendi, accusamus illum perspiciatis voluptatem sapiente ratione, atque laudantium unde explicabo, eos pariatur a. Dolores odit labore voluptates enim magnam rerum, earum, soluta sunt repellendus dolorum, iure quas expedita? Fuga, tempore rem quisquam saepe magnam quia enim ratione itaque dolore fugiat ullam nesciunt porro nulla, voluptas suscipit, laudantium vitae rerum non esse alias corporis odio quibusdam animi? Ipsam, quisquam."
        title="Histoire et valeurs"
        image="https://placehold.co/600"
      />
    </div>
  );
}
