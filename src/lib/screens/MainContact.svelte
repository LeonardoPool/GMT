<script lang="ts">
	type TeamMember = {
		name: string;
		role: string;
		initials: string;
		detail: string;
		email?: string;
	};

	type DepartmentMember = {
		name: string;
		position: string;
		email: string;
	};

	type Department = {
		title: string;
		lead: string;
		email: string;
		members: DepartmentMember[];
	};

	const teamMembers: TeamMember[] = [
		{
			name: 'Andrés Esquivel',
			role: 'Director General',
			initials: 'AE',
			detail: 'Dirección estratégica y relación con aliados.',
			email: 'director@gmtmayorista.com'
		},
		{
			name: 'Leonardo Pool',
			role: 'Jefe del departamento de sistemas',
			initials: 'LP',
			detail: 'Arquitectura de sistemas y evolución tecnológica.',
			email: 'sistemas@gmtmayorista.com'
		},
		{
			name: 'Cristofer Padilla',
			role: 'Jefe del departamento de soporte',
			initials: 'CP',
			detail: 'Gestión de soporte técnico y atención al cliente.',
			email: 'soporte@gmtmayorista.com'
		},
		{
			name: 'Alex Yah',
			role: 'Desarrollador web',
			initials: 'AY',
			detail: 'Optimización de interfaz y nuevas funcionalidades.',
			email: 'desarrolloweb@gmtmayorista.com'
		},
		{
			name: 'Karla Nahuat',
			role: 'Directora Administrativa',
			initials: 'KN',
			detail: 'Seguimiento operativo, control y atención administrativa.',
			email: 'administracion@gmtmayorista.com'
		}
	];

	const contactData = [
		{ label: 'Teléfono', value: '+52 999 388 6600' },
		{ label: 'WhatsApp', value: '+52 562 989 8474' },
		{ label: 'Ubicación', value: 'Mérida, Yucatán' }
	];

	const departments: Department[] = [
		{
			title: 'Dirección General',
			lead: 'Andrés Esquivel',
			email: 'director@gmtmayorista.com',
			members: [
				{ name: 'Andrés Esquivel', position: 'Director General', email: 'director@gmtmayorista.com' }
			]
		},
		{
			title: 'Departamento de sistemas',
			lead: 'Leonardo Pool',
			email: 'sistemas@gmtmayorista.com',
			members: [
				{ name: 'Leonardo Pool', position: 'Jefe del departamento de sistemas', email: 'sistemas@gmtmayorista.com' },
				{ name: 'Alex Yah', position: 'Desarrollador web', email: 'desarrolloweb@gmtmayorista.com' }
			]
		},
		{
			title: 'Departamento de soporte',
			lead: 'Cristofer Padilla',
			email: 'soporte@gmtmayorista.com',
			members: [
				{ name: 'Cristofer Padilla', position: 'Jefe del departamento de soporte', email: 'soporte@gmtmayorista.com' }
			]
		},
		{
			title: 'Administrativo',
			lead: 'Karla Nahuat',
			email: 'administracion@gmtmayorista.com',
			members: [
				{ name: 'Karla Nahuat', position: 'Directora Administrativa', email: 'administracion@gmtmayorista.com' }
			]
		}
	];
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
				<span>{teamMembers[0].initials}</span>
			</div>
			<div class="member-copy member-copy--featured">
				<p class="member-tag">Dirección principal</p>
				<h2>{teamMembers[0].name}</h2>
				<p class="member-role">{teamMembers[0].role}</p>
				<p class="member-detail">{teamMembers[0].detail}</p>
			</div>
		</article>

		<div class="team-grid">
			{#each teamMembers.slice(1) as member}
				<article class="member-card">
					<div class="member-portrait">
						<span>{member.initials}</span>
					</div>
					<div class="member-copy">
						<h3>{member.name}</h3>
						<p class="member-role">{member.role}</p>
						<p class="member-detail">{member.detail}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="departments-section">
		<div class="departments-header">
			<p class="eyebrow">Contacto por departamento</p>
			<h2>Datos de contacto</h2>
			<p>
				Selecciona un departamento para ver el contacto de nuestro equipo especializado.
			</p>
		</div>

		<div class="departments-list">
			{#each departments as department, index}
				<details class="department-item" open={index === 0}>
					<summary>
						<div>
							<span class="department-title">{department.title}</span>
							<span class="department-lead">Líder: {department.lead}</span>
						</div>
						<span class="department-arrow">▾</span>
					</summary>
					<div class="department-content">
						<div class="department-members">
							{#each department.members as member}
								<div class="member-badge">
									<div class="member-info">
										<span class="member-name">{member.name}</span>
										<span class="member-position">{member.position}</span>
									</div>
									<span class="member-email">{member.email}</span>
								</div>
							{/each}
						</div>

						<div class="contact-data-card contact-data-card--inline">
							<h2>Contacto general</h2>
							<div class="contact-data-list">
								<div class="contact-data-item">
									<span class="contact-label">Correo</span>
									<span class="contact-value">{department.email}</span>
								</div>
								{#each contactData as item}
									<div class="contact-data-item">
										<span class="contact-label">{item.label}</span>
										<span class="contact-value">{item.value}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</details>
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

	.contact-data-card {
		background: linear-gradient(180deg, #f7faf8 0%, #ffffff 100%);
		border: 1px solid rgba(46, 111, 94, 0.12);
		border-radius: 24px;
		padding: 28px;
		box-shadow: 0 18px 40px rgba(12, 85, 95, 0.08);
	}

	.contact-data-card h2 {
		font-family: 'Poppins', sans-serif;
		font-size: 22px;
		font-weight: 700;
		margin: 0 0 20px;
		color: #1a1a1a;
	}

	.contact-data-list {
		display: grid;
		gap: 14px;
	}

	.contact-data-item {
		display: grid;
		gap: 6px;
		padding: 14px 16px;
		background: #ffffff;
		border-radius: 16px;
		border: 1px solid rgba(46, 111, 94, 0.08);
	}

	.contact-label {
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #2e6f5e;
	}

	.contact-value {
		font-size: 15px;
		font-weight: 600;
		color: #1e2320;
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
		padding: 16px;
		overflow: hidden;
	}

	.member-portrait {
		width: 100%;
		aspect-ratio: 3 / 4;
		border-radius: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		background:
			radial-gradient(circle at top, rgba(255,255,255,0.3), transparent 42%),
			linear-gradient(160deg, #2e6f5e 0%, #87b79f 48%, #eaf3ee 100%);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
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
		font-size: 52px;
		font-weight: 800;
		color: rgba(255, 255, 255, 0.9);
		text-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
		letter-spacing: 0.05em;
	}

	.member-portrait--featured {
		aspect-ratio: 3 / 4;
		max-height: 360px;
	}

	.member-copy {
		padding: 16px 8px 4px;
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

	.member-detail {
		color: #5f6561;
		font-size: 14px;
		line-height: 1.6;
		margin: 0;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 16px;
	}

	.departments-section {
		padding-top: 8px;
	}

	.departments-header {
		max-width: 760px;
		margin-bottom: 20px;
	}

	.departments-header h2 {
		font-family: 'Poppins', sans-serif;
		font-size: clamp(24px, 3vw, 34px);
		margin: 0 0 10px;
		color: #1a1a1a;
	}

	.departments-header p {
		color: #5f6561;
		line-height: 1.65;
		margin: 0;
	}

	.departments-list {
		display: grid;
		gap: 14px;
	}

	.department-item {
		border: 1px solid rgba(46, 111, 94, 0.12);
		border-radius: 22px;
		background: #ffffff;
		box-shadow: 0 16px 36px rgba(12, 85, 95, 0.06);
		overflow: hidden;
	}

	.department-item summary {
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
		padding: 20px 22px;
		cursor: pointer;
	}

	.department-item summary::-webkit-details-marker {
		display: none;
	}

	.department-title {
		display: block;
		font-family: 'Poppins', sans-serif;
		font-size: 18px;
		font-weight: 700;
		color: #1a1a1a;
	}

	.department-lead {
		display: block;
		margin-top: 4px;
		color: #2e6f5e;
		font-size: 13px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.department-arrow {
		color: #2e6f5e;
		font-size: 20px;
		font-weight: 700;
		transition: transform 0.2s ease;
	}

	.department-item[open] .department-arrow {
		transform: rotate(180deg);
	}

	.department-content {
		display: grid;
		gap: 18px;
		padding: 0 22px 22px;
	}

	.department-members {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.member-badge {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 12px 16px;
		border-radius: 12px;
		background: rgba(46, 111, 94, 0.08);
		border: 1px solid rgba(46, 111, 94, 0.12);
	}

	.member-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.member-name {
		display: block;
		font-size: 14px;
		font-weight: 700;
		color: #1a1a1a;
		line-height: 1.3;
	}

	.member-position {
		display: block;
		font-size: 12px;
		color: #666;
		font-weight: 500;
		line-height: 1.3;
	}

	.member-email {
		display: block;
		font-size: 13px;
		color: #2e6f5e;
		font-weight: 600;
		word-break: break-all;
		line-height: 1.3;
	}

	.contact-data-card--inline {
		padding: 20px;
		border-radius: 20px;
		box-shadow: none;
		background: #ffffff;
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

		.contact-data-card {
			padding: 22px;
		}

		.department-item summary {
			padding: 18px 16px;
		}

		.department-content {
			padding: 0 16px 18px;
		}
	}
</style>
