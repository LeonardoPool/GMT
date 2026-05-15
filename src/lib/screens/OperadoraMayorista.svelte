<script lang="ts">
	const contactInfo = [
		{
			icon: 'mail',
			value: 'contacto@gmtmayorista.com'
		},
		{
			icon: 'phone',
			value: '+52 9993886600'
		},
		{
			icon: 'location',
			value: 'Mérida, Yucatán'
		}
	];
</script>

<div class="contact-page-wrapper">
	<main class="contact-layout">
		<div class="contact-info-section">
			<h1 class="main-heading">Solicita tu acceso como Socio Mayorista</h1>
			<p class="main-desc">
				Este es el primer paso de una gran decisión.<br />
				Cuéntanos un poco más sobre tu solicitud<br />
				En unos minutos nos pondremos en contacto contigo para darte acceso a nuestra plataforma.
			</p>

			<h3 class="info-heading">Nuestro contacto</h3>

			<div class="info-list">
				{#each contactInfo as item}
					<div class="info-item">
						{#if item.icon === 'mail'}
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
						{:else if item.icon === 'phone'}
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
						{:else}
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
						{/if}
						<span>{item.value}</span>
					</div>
				{/each}
			</div>
		</div>

		<div class="contact-form-section">
			<div class="form-card">
				<h2 class="form-heading">Solicita tu acceso</h2>
				<p class="form-desc">¡Ponte en contacto con nosotros y comencemos a trabajar juntos!</p>

				<form class="contact-form" onsubmit={(e) => e.preventDefault()}>
					<div class="input-group">
						<input type="text" placeholder="Escribe el nombre de tu negocio" required minlength="3" />
					</div>

					<div class="input-group">
						<input type="tel" placeholder="Escribe tu número de teléfono" required pattern="[0-9]&#123;10,14&#125;" title="Por favor ingresa un número válido (ej. 10 dígitos)" />
						<span class="input-hint">Ingresa tu teléfono a 10 dígitos.</span>
					</div>

					<div class="input-group">
						<input type="email" placeholder="Escribe tu correo electrónico" required />
					</div>

					<div class="input-group">
						<input type="text" placeholder="Escribe tu solicitud" required minlength="10" />
					</div>

					<button type="submit" class="submit-btn">Enviar</button>
				</form>
			</div>
		</div>
	</main>
</div>

<style>
	.contact-page-wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background: #2e6f5e;
		font-family: 'Inter', sans-serif;
	}

	.contact-layout {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		max-width: 1200px;
		margin: 0 auto;
		width: 100%;
		padding: 60px 40px;
		align-items: center;
	}

	.contact-info-section {
		padding-right: 40px;
		color: #ffffff;
	}

	.main-heading {
		font-family: 'Inter', sans-serif;
		font-size: 46px;
		font-weight: 800;
		line-height: 1.2;
		margin-bottom: 24px;
		color: #ffffff;
	}

	.main-desc {
		font-size: 18px;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.92);
		margin-bottom: 50px;
		font-weight: 400;
	}

	.info-heading {
		font-family: 'Inter', sans-serif;
		font-size: 22px;
		font-weight: 600;
		color: #ffffff;
		margin-bottom: 24px;
	}

	.info-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.info-item {
		display: flex;
		align-items: center;
		gap: 16px;
		font-size: 16px;
		font-weight: 500;
		color: #ffffff;
	}

	.info-item svg {
		opacity: 0.8;
	}

	.contact-form-section {
		display: flex;
		justify-content: flex-end;
	}

	.form-card {
		background-color: #dee4cd;
		border-radius: 24px;
		padding: 50px;
		width: 100%;
		max-width: 500px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
	}

	.form-heading {
		font-family: 'Inter', sans-serif;
		font-size: 28px;
		font-weight: 800;
		color: #1a1a1a;
		margin-bottom: 8px;
	}

	.form-desc {
		font-size: 15px;
		color: #333;
		margin-bottom: 40px;
		font-weight: 500;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.input-group input {
		background: transparent;
		border: none;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding: 8px 0;
		font-family: 'Inter', sans-serif;
		font-size: 14px;
		color: #1a1a1a;
		outline: none;
		transition: border-color 0.3s;
	}

	.input-group input::placeholder {
		color: #4a5043;
		font-weight: 500;
	}

	.input-group input:focus {
		border-bottom-color: #1a1a1a;
	}

	.input-hint {
		font-size: 11px;
		color: #4a5043;
		margin-top: 6px;
	}

	.submit-btn {
		background-color: #1a1a1a;
		color: white;
		border: none;
		border-radius: 50px;
		padding: 16px 0;
		font-family: 'Inter', sans-serif;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
		transition: background-color 0.3s;
		margin-top: 20px;
	}

	.submit-btn:hover {
		background-color: #333;
	}

	@media (max-width: 900px) {
		.contact-layout {
			grid-template-columns: 1fr;
			gap: 40px;
			padding: 40px 20px;
		}

		.contact-info-section {
			padding-right: 0;
		}

		.contact-form-section {
			justify-content: center;
		}

		.main-heading {
			font-size: 36px;
		}
	}
</style>