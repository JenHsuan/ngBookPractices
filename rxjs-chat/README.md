# RxjsChat
# Usages

* Update or installl angular cli on the local dev environment

```

npm install -g @angular/cli

```

* Execute
```

cd folder
npm install
ng serve

```

# Notes

## Observerable operators
- map
    - like the built-in map in JS
- scan
    - like the built-in reduce in JS
- [publish](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/publish.md), [replay](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/replay.md)
- publishReplay
    - share a subscription between multiple subscribers and replay n number
- [refCount](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/refcount.md)

## Observerable cconcepts
- [Hot and cold observerable]()
- [Observable vs Subject vs BehaviorSubject](https://fullstackladder.dev/blog/2020/09/27/mastering-rxjs-12-observable-subject-behaviorsubject-replaysubject-asyncsubject/)
    - read/write stream

## Services
- Store Observable (models) and is able to be subscribed by components (like states in React)

# References
* [[譯]RxJS:如何使用refCount](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/664351/)
