"# playwright-course-jm-consultant" 

### Run all tests:

```
npx playwright test
```

### Run tests on specific environment:

```
ENV=prod npx playwright test
```

### Run tests by title -g(grep):

```
npx playwright test example.spec.ts --grep "should get users from page 2"
```

### Run tests by Line number:

```
npx playwright test example.spec.ts:32
```


### Run tests by Line number

```
npx playwright test example.spec.ts
```

### Docker

#### Generate image:

```
docker build --tag docker-in-docker-jenkins .
```

#### Create container:

```
docker run --rm --group-add 0 -v "//var/run/docker.sock:/var/run/docker.sock" -p 8080:8080 -v jenkins_home:/var/jenkins_home --name jenkins docker-in-docker-jenkins 
```

### Patterns:

* Mock factory pattern.https://dev.to/davelosert/mock-factory-pattern-in-typescript-44l9
*  
