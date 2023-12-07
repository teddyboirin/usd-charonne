import Container from '@/components/Container';
import Player from '@/components/Player';
import TeamHead from '@/components/TeamHead';

export default function TeamItem() {
  return (
    <>
      <Container>
        <>
          <TeamHead />
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8">
            <Player name="Teddy Boirin #4" />
            <Player name="Teddy Boirin #4" />
            <Player name="Teddy Boirin #4" />
            <Player name="Teddy Boirin #4" />
            <Player name="Teddy Boirin #4" />
            <Player name="Teddy Boirin #4" />
          </section>
        </>
      </Container>
    </>
  );
}
