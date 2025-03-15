// interface for event
export interface Event {
  name: string;
  date: string;
  description: string;
}

// interface for Timeline props
export interface TimelineProps {
  events: Event[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <ol className="relative border-s border-gray-400 dark:border-gray-700">
      {events.map((event, _) => (
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-gray-100 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {event.date}
          </time>
          <h3 className="text-xl font-semibold text-white dark:text-white">
            {event.name}
          </h3>
          <p className="mb-4 text-sm font-normal text-gray-300 dark:text-gray-400">
            {event.description}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
