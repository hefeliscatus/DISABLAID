import React from "react";

const Footer = () => (
	<footer class="text-gray-500 bg-gray-900 body-font">
		<div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
			<div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
				<div class="lg:w-1/4 md:w-1/2 w-full px-4">
					<h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
						Team members
					</h2>
					<nav class="list-none mb-10">
						<li>
							<a href="https://github.com/yanddev" rel="noopener noreferrer" target="_blank" class="text-gray-600 hover:text-white">Yand Dev</a>
						</li>
						<li>
							<a href="https://github.com/hefeliscatus" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-white">Felis Catus</a>
						</li>
						
					</nav>
				</div>
			</div>
			<div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
				<h1 class="flex title-font font-medium items-center md:justify-center justify-center text-white">
					<span class="ml-3 text-xl">Team </span>
				</h1>
				<p class="mt-2 text-sm text-gray-700">
					A duo with great ambitions
				</p>
				
			</div>
		</div>
		<div class="bg-gray-800">
			<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
				<p class="text-gray-600 text-sm text-center sm:text-left">
					Made with ❤
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
