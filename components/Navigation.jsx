import Link from 'next/link';
import classes from './Navigation.module.css';

function Navigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Nextjs SuperHeroes</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Heroes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;