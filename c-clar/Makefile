SRCS=clar.c test.c
OBJS=$(SRCS:.c=.o) 
CFLAGS=-g -I. -Wall -Wextra -Werror -Wno-unused-function

.PHONY: clean

all: test

.c.o:
	${CC} ${CFLAGS} -c $<

clar.suite: test.c
	python generate.py

clar.c: clar.suite .clarcache

test: $(OBJS)
	$(CC) $(CFLAGS) -o $@ $(OBJS)

clean:
	$(RM) $(OBJS) test .clarcache clar.suite
