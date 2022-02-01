import Link from 'next/link';
import { CardIcon, CardTitle, CardSubtitle } from 'components/atoms/card';

/**
 * General-purpose snippet/collection preview card.
 * Used in listing pages and search results.
 * Dependent on the `Card` component.
 * @param {object} contentItem - Snippet or collection object for the card.
 * @param {string} fromParam - A string to pass to the `from` param.
 */
const PreviewCard = ({ contentItem, fromParam }) => (
  <li className='card srfc-01dp txt-100 list-card grid'>
    <CardIcon icon={contentItem.icon} expertise={contentItem.expertise} />
    <div className='card-data'>
      <CardTitle isSecondary>
        <Link
          href={
            fromParam ? `${contentItem.url}?from=${fromParam}` : contentItem.url
          }
        >
          <a className='inherit'>{contentItem.title}</a>
        </Link>
      </CardTitle>
      <CardSubtitle>{contentItem.tags}</CardSubtitle>
    </div>
    <div
      className='card-description'
      dangerouslySetInnerHTML={{ __html: `${contentItem.description}` }}
    />
  </li>
);

export default PreviewCard;
