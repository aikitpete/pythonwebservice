import subprocess
import os
from bottle import run, post, request, response, get, route, Bottle, ServerAdapter

def jsonp(request, jsonstring):
    if (request.query.callback):
        return "%s(%s)" % (request.query.callback, jsonstring)
    return jsonstring

@get('/<path>')
def process(path):
    return "Hi there"
    
@post('/<path>')
def process(path):
    return "Hi there"

#import daemon
#import spam

#with daemon.DaemonContext():
# copied from bottle. Only changes are to import ssl and wrap the socket
class SSLWSGIRefServer(ServerAdapter):
    def run(self, handler):
        from wsgiref.simple_server import make_server, WSGIRequestHandler
        import ssl
        if self.quiet:
            class QuietHandler(WSGIRequestHandler):
                def log_request(*args, **kw): pass
            self.options['handler_class'] = QuietHandler
        srv = make_server(self.host, self.port, handler, **self.options)
        srv.socket = ssl.wrap_socket (
         srv.socket,
         certfile='server.pem',  # path to certificate
         server_side=True)
        srv.serve_forever()

print os.environ["PORT"]
print os.environ["IP"]

#with daemon.DaemonContext():
#run(host='0.0.0.0', port=8000, debug=True)
srv = SSLWSGIRefServer(host="0.0.0.0", port=8081)
run(server=srv)
#run(host='0.0.0.0', port=8000, debug=True)

#class YourCode(object):
#        def run(self):
#            run(host='localhost', port=8000, debug=True)
#
#import sys
#from daemon import Daemon
#
#class MyDaemon(Daemon):
#        def run(self):
#               # Or simply merge your code with MyDaemon.
#               your_code = YourCode()
#               your_code.run()
#
#if __name__ == "__main__":
#        daemon = MyDaemon('/tmp/daemon-example.pid')
#        if len(sys.argv) == 2:
#                if 'start' == sys.argv[1]:
#                        daemon.start()
#                elif 'stop' == sys.argv[1]:
#                        daemon.stop()
#                elif 'restart' == sys.argv[1]:
#                        daemon.restart()
#                else:
#                        print "Unknown command"
#                        sys.exit(2)
#                sys.exit(0)
#        else:
#                print "usage: %s start|stop|restart" % sys.argv[0]
#                sys.exit(2)