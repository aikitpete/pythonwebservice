import web
import json
from urllib import quote

def adaptHeader(txt):
  """Input: string, header name as it is in web.ctx.env
  Output: string, header name according to http protocol.
  es: "HTTP_CACHE_CONTROL" => "Cache-Control"
  """
  txt = txt.replace('HTTP_', '')
  return '-'.join((t[0] + t[1:].lower() for t in txt.split('_')))

def rawRequest(env):
  """Reconstruct and return the web request based on web.ctx.env"""

  # url reconstruction
  # see http://www.python.org/dev/peps/pep-0333/#url-reconstruction
  url = env['wsgi.url_scheme']+'://' # http/https
  url += env.get('HTTP_HOST') or (env['SERVER_NAME']+':'+env['SERVER_PORT']) # host + port
  url += quote(env.get('SCRIPT_NAME', ''))
  url += quote(env.get('PATH_INFO', ''))
  url += ('?' + env['QUERY_STRING']) if env.get('QUERY_STRING') else '' # GET querystring

  # get/post request
  req = ' '.join((env['REQUEST_METHOD'], url, env['SERVER_PROTOCOL'])) + '\n'

  # headers
  for k, v in env.items():
    if k.startswith('HTTP') or k in ('CONTENT_TYPE', 'CONTENT_LENGTH'):
      req += adaptHeader(k) + ': ' + str(v) + '\n'

  # post data 
  try:
    req += '\n' + env['wsgi.input'].read(int(env['CONTENT_LENGTH']))
  except:
    pass

  return req

def make_text(string):
    return string

def notfound():
    #return web.notfound("Sorry, the page you were looking for was not found.")
    return json.dumps({'ok':0, 'errcode': 404})

def internalerror():
    #return web.internalerror("Bad, bad server. No donut for you.")
    return json.dumps({'ok':0, 'errcode': 500})


urls = (
    '/(.*)', 'handleRequest',
)

app = web.application(urls, globals())
app.notfound = notfound
app.internalerror = internalerror

class handleRequest:
    def GET(self, method_id):
        print rawRequest(web.ctx.env)
        if not method_id: 
            return web.notfound()
        else:
            return json.dumps({'ok': method_id})

    def POST(self):
        print rawRequest(web.ctx.env)
        i = web.input()
        data = web.data() # you can get data use this method
        print data
        pass
    
class MyApplication(web.application):
    def run(self, port=8080, *middleware):
        func = self.wsgifunc(*middleware)
        return web.httpserver.runsimple(func, ('0.0.0.0', port))
        
if __name__ == '__main__':
    app = MyApplication(urls, globals())
    app.run(port=8888)

