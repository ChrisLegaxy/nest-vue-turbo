setup:
	doppler run -- docker-compose up -d

gen-types:
	yarn workspace api prisma:generate

migrate-dev:
	doppler run -- yarn workspace api prisma:migrate:dev
