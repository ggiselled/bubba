AWS_REGION="sa-east-1"
BUCKET_NAME="bubba-bags"
CDN_DISTRIBUTION="E1CK113DN5DZGE" #Bubba Bags Cloudfront Distribution
install:
	npm install
build: install
	npm run build
deploy: build
	aws s3 cp ./dist s3://$(BUCKET_NAME) --recursive
	aws s3 website s3://$(BUCKET_NAME) --index-document index.html --error-document index.html
	$(MAKE) invalidate_cache
invalidate_cache:
	aws cloudfront create-invalidation --distribution-id $(CDN_DISTRIBUTION) --paths "/*"