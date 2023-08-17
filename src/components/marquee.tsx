import { Icon } from '.';
import { cn } from '@miroiu/lib/utils';
import { HTMLAttributes } from 'react';
import { marquee } from '@miroiu/lib/fixtures';

export function Marquee({ className, ...props }: HTMLAttributes<HTMLElement>) {
	return (
		<article
			className={cn(
				'flex whitespace-no-wrap motion-safe:overflow-x-hidden hover:pause',
				className
			)}
			{...props}
		>
			<div className="relative">
				<ul className="flex motion-safe:animate-marquee gap-4">
					{marquee.map(icon => (
						<a
							key={`marquee-${icon.name}`}
							target="_blank"
							rel="noopener"
							href={icon.href}
							className="border hover:bg-gray-100 hover:dark:bg-gray-100/10 border-gray-100 dark:border-gray-100/10 p-3 text-primary rounded-lg last-of-type:mr-4 transition-background duration-300 ease-in-out"
						>
							<Icon name={icon.name} className="w-24 h-24" />
						</a>
					))}
				</ul>
				<ul className="flex absolute top-0 motion-safe:animate-marquee2 gap-4">
					{marquee.map(icon => (
						<a
							key={`marquee2-${icon.name}`}
							target="_blank"
							rel="noopener"
							href={icon.href}
							className="border hover:bg-gray-100 hover:dark:bg-gray-100/10 border-gray-100 dark:border-gray-100/10 p-3 text-primary rounded-lg transition-background duration-300 ease-in-out"
						>
							<Icon name={icon.name} className="w-24 h-24" />
						</a>
					))}
				</ul>
			</div>
		</article>
	);
}
