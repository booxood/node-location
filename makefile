TESTS = $(shell find test -type f -name "*.js")
TIMEOUT = 5000
MOCHA_OPTS =

install:
	@npm install

test-unit:
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test: install test-unit

test-cov:
	@NODE_ENV=test node \
		./node_modules/.bin/istanbul cover \
		./node_modules/mocha/bin/_mocha \
		-- -u exports \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-travis:
	@NODE_ENV=test node \
		./node_modules/.bin/istanbul cover \
		./node_modules/mocha/bin/_mocha \
		--report lcovonly \
		-- -u exports \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-all: install test test-cov

.PHONY: test test-cov test-travis test-all
