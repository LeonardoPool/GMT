<script lang="ts">
	import gmtLogo from '$lib/assets/Logos/LOGONUEVOGMT.jpeg';

	type TeamMember = {
		name: string;
		role: string;
		initials: string;
		detail?: string;
		email?: string;
		phone?: string;
		image?: string;
	};

	const teamMembers: TeamMember[] = [
		{
			name: 'Andrés Esquivel',
			role: 'Director General',
			initials: 'AE',
			detail: 'Dirección estratégica y relación con aliados.',
			email: 'director@gmtmayorista.com',
			image: gmtLogo
		},
		{
			name: 'Leonardo Pool',
			role: 'Jefe del departamento de sistemas',
			initials: 'LP',
			detail: 'Arquitectura de sistemas y evolución tecnológica.',
			email: 'sistemas@gmtmayorista.com',
			image: gmtLogo
		},
		{
			name: 'Cristofer Padilla',
			role: 'Jefe del departamento de soporte',
			initials: 'CP',
			detail: 'Gestión de soporte técnico y atención al cliente.',
			email: 'soporte@gmtmayorista.com',
			image: gmtLogo
		},
		{
			name: 'Alex Yah',
			role: 'Desarrollador web',
			initials: 'AY',
			detail: 'Optimización de interfaz y nuevas funcionalidades.',
			email: 'desarrolloweb@gmtmayorista.com',
			image: gmtLogo
		},
		{
			name: 'Karla Nahuat',
			role: 'Directora Administrativa',
			initials: 'KN',
			detail: 'Seguimiento operativo, control y atención administrativa.',
			email: 'administracion@gmtmayorista.com',
			image: gmtLogo
		}
	];

	// Additional department/contact cards as requested
	teamMembers.push(
		{ name: 'Departamento de grupos', role: 'Departamento', initials: 'DG', email: 'grupos@gmtmayorista.com', image: gmtLogo },
		{ name: 'Departamento de bodas', role: 'Departamento', initials: 'DB', email: 'bodas@gmtmayorista.com', image: gmtLogo },
		{ name: 'Departamento de vuelos', role: 'Departamento', initials: 'DV', email: 'vuelos@gmtmayorista.com', image: gmtLogo },
		{ name: 'Ventas individuales', role: 'Ventas', initials: 'VI', email: 'ventas@gmtmayorista.com', image: gmtLogo }
	);
</script>

<div class="contact-page">
	<section class="contact-hero">
		<div class="contact-hero-copy">
			<p class="eyebrow">Equipo GMT Mayorista</p>
			<h1>Nuestro equipo profesional.</h1>
			<p class="hero-description">
				Somos una empresa joven impulsada por un equipo con más de 25 años de experiencia en el sector turístico. Nacimos con la visión de mostrar al mundo la grandeza y el potencial del mundo maya, ofreciendo experiencias únicas, atención personalizada y un servicio basado en la confianza, la calidez y el profesionalismo.
			</p>
		</div>
	</section>

	<section class="team-section">
		<article class="featured-member">
			<div class="member-portrait member-portrait--featured">
				{#if teamMembers[0].image}
					<img src={teamMembers[0].image} alt={teamMembers[0].name} class="portrait-img" />
				{:else}
					<span>{teamMembers[0].initials}</span>
				{/if}
			</div>
			<div class="member-copy member-copy--featured">
				<p class="member-tag">Dirección principal</p>
				<h2>{teamMembers[0].name}</h2>
				<p class="member-role">{teamMembers[0].role}</p>
				{#if teamMembers[0].email || teamMembers[0].phone}
					<div class="member-contact">
						{#if teamMembers[0].email}
							<span class="contact-label">Correo</span>
							<span class="contact-value member-contact-value">{teamMembers[0].email}</span>
						{/if}
						{#if teamMembers[0].phone}
							<span class="contact-label">Teléfono</span>
							<span class="contact-value member-contact-value">{teamMembers[0].phone}</span>
						{/if}
					</div>
				{/if}
			</div>
		</article>

		<div class="team-grid">
			{#each teamMembers.slice(1) as member}
				<article class="member-card">
					<div class="member-portrait">
						{#if member.image}
							<img src={member.image} alt={member.name} class="portrait-img" />
						{:else}
							<span>{member.initials}</span>
						{/if}
					</div>
					<div class="member-copy">
						<h3>{member.name}</h3>
						<p class="member-role">{member.role}</p>
						{#if member.email || member.phone}
							<div class="member-contact">
								{#if member.email}
									<span class="contact-label">Correo</span>
									<span class="contact-value member-contact-value">{member.email}</span>
								{/if}
								{#if member.phone}
									<span class="contact-label">Teléfono</span>
									<span class="contact-value member-contact-value">{member.phone}</span>
								{/if}
							</div>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</section>
</div>

<style>
	:global(body) {
		background: #ffffff;
	}

	.contact-page {
		width: 100%;
		max-width: 1240px;
		margin: 0 auto;
		padding: 72px 24px 96px;
		color: #1a1a1a;
		font-family: 'Inter', sans-serif;
	}

	.contact-hero {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 20px;
		align-items: start;
		margin-bottom: 44px;
	}

	.contact-hero-copy {
		max-width: 760px;
		margin: 0 auto;
		text-align: center;
	}

	.eyebrow {
		color: #2e6f5e;
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		margin-bottom: 14px;
	}

	h1 {
		font-family: 'Poppins', sans-serif;
		font-size: clamp(38px, 5vw, 68px);
		line-height: 0.98;
		margin: 0 0 18px;
		letter-spacing: -0.03em;
	}

	.hero-description {
		max-width: 700px;
		font-size: 18px;
		line-height: 1.75;
		color: #5f6561;
		margin: 0 auto;
	}

	.contact-label {
		font-size: 10px; /* reduced */
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #2e6f5e;
	}

	.contact-value {
		font-size: 13px; /* reduced */
		font-weight: 600;
		color: #1e2320;
	}

	.member-contact {
		display: grid;
		gap: 6px;
		margin-top: 10px;
		padding: 10px 12px; /* slightly tighter */
		border-radius: 16px;
		background: rgba(46, 111, 94, 0.06);
		border: 1px solid rgba(46, 111, 94, 0.1);
	}

	.member-contact-value {
		word-break: break-word;
	}

	.team-section {
		display: grid;
		gap: 24px;
		margin-bottom: 48px;
	}

	.featured-member {
		display: grid;
		grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
		gap: 18px;
		align-items: center;
		justify-items: center;
		margin: 0 auto;
		width: min(100%, 760px);
	}

	.member-card,
	.featured-member {
		background: #ffffff;
		border: 1px solid rgba(46, 111, 94, 0.12);
		border-radius: 28px;
		box-shadow: 0 18px 40px rgba(12, 85, 95, 0.08);
	}

	.featured-member {
		padding: 18px;
	}

	.member-card {
		padding: 12px;
		overflow: hidden;
	}

	.member-portrait {
		width: 100%;
		aspect-ratio: 3 / 4;
		border-radius: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		background:
			radial-gradient(circle at top, rgba(255,255,255,0.3), transparent 42%),
			linear-gradient(160deg, #2e6f5e 0%, #87b79f 48%, #eaf3ee 100%);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
		max-height: 260px;
	}

	.member-portrait::before {
		content: '';
		position: absolute;
		inset: 12px;
		border-radius: 18px;
		border: 1px solid rgba(255, 255, 255, 0.3);
	}

	.member-portrait span {
		position: relative;
		z-index: 1;
		font-family: 'Poppins', sans-serif;
		font-size: 42px;
		font-weight: 800;
		color: rgba(255, 255, 255, 0.9);
		text-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
		letter-spacing: 0.05em;
	}

	.portrait-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		background: #ffffff;
		position: absolute;
		inset: 0;
	}

	.member-portrait--featured {
		aspect-ratio: 3 / 4;
		max-height: 300px;
	}

	.member-copy {
		padding: 12px 8px 8px;
	}

	.member-copy--featured {
		padding: 0 4px 0 2px;
	}

	.member-tag {
		color: #2e6f5e;
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		margin-bottom: 10px;
	}

	.member-copy h2,
	.member-copy h3 {
		font-family: 'Poppins', sans-serif;
		font-size: clamp(22px, 2.6vw, 32px);
		line-height: 1.12;
		margin: 0 0 8px;
		color: #1a1a1a;
	}

	.member-copy h3 {
		font-size: 20px;
	}

	.member-role {
		color: #2e6f5e;
		font-size: 15px;
		font-weight: 700;
		margin: 0 0 10px;
	}

	/* member detail removed from cards; kept as optional data in the model */

	.team-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 16px;
	}

	@media (max-width: 1100px) {
		.contact-hero {
			grid-template-columns: 1fr;
		}

		.featured-member {
			width: 100%;
			grid-template-columns: minmax(280px, 360px) minmax(0, 1fr);
		}

		.team-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 720px) {
		.contact-page {
			padding: 48px 16px 72px;
		}

		.hero-description {
			font-size: 16px;
		}

		.featured-member {
			grid-template-columns: 1fr;
		}

		.member-portrait--featured {
			aspect-ratio: 3 / 4;
		}

		.team-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
