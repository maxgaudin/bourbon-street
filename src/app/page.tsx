import VictimCard from '@/components/VictimCard';
import { victims } from './data';

export default function Home() {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12">
          <h3 className=" mb-3">Remembering the Victims</h3>
          <p className="lead">
            On New Year's Eve 2025, our community suffered a devastating loss. 
            These are the stories of those we lost, and how you can help their families.
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {victims.map((victim) => (
          <div key={victim.id} className="col">
            <VictimCard victim={victim} />
          </div>
        ))}
      </div>
    </div>
  );
}
