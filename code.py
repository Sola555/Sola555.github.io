import django
EMAIL_BACKEND =
‘django.core.mail.backends.smtp.EmailBackend’
EMAIL_HOST = ‘sola.lai.0000.gmail.com’
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = ‘laika551114@gmail.com’
EMAIL_HOST_PASSWORD = ‘sola-2008’
from Django import forms
class Subscribe(forms.Form):
    Email = forms.EmailField()
    def __str__(self):
        return self.Email
from django.shortcuts import render
from myproject.settings import EMAIL_HOST_USER
from . import forms
from django.core.mail import send_mail
# Create your views here.
#DataFlair #Send Email
def subscribe(request):
    sub = forms.Subscribe()
    if request.method == 'POST':
        sub = forms.Subscribe(request.POST)
        subject = 'Welcome to DataFlair'
        message = 'Hope you are enjoying your Django Tutorials'
        recepient = str(sub['Email'].value())
        send_mail(subject, 
            message, EMAIL_HOST_USER, [recepient], fail_silently = False)
        return render(request, 'subscribe/success.html', {'recepient': recepient})
    return render(request, 'subscribe/Sendpage.htm', {'form':sub})
