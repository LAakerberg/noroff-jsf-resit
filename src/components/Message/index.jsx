import { Spinner } from './Spinner/Spinner';

/**
 * Component for displaying a message with an optional spinner.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the message (e.g., 'success', 'error').
 * @param {string} props.text - The text content of the message.
 * @returns {JSX.Element} The Message component.
 */
export const Message = ({ type, text }) => {
  return (
    <div
      className={`flex w-fit m-auto shadow-lg drop-shadow-2xl border border-black rounded-lg message ${type}`}
    >
      <div className="flex-1">
        <p className="m-2">{text}</p>
      </div>
      <div className="flex-initial p-1">
        {type !== 'error' && type !== 'booked' && <Spinner />}
      </div>
    </div>
  );
};
