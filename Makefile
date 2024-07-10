###########################################################################
## Make file
##
## @author: Irfan Andriansyah <irfan@fithub.id>
## @since: 2024.02.01
###########################################################################

default:

init-dev:
	@echo "Init dev..."
	@echo
	@sh ./etc/shells/init-dev.sh

check-code:
	@echo "Start linting & testing..."
	@echo
	@pnpm run type:check
	@pnpm run lint
	@CI=true pnpm run test